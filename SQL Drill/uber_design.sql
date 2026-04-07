/* User table */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);


/* DRIVERS table */
CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    is_available BOOLEAN DEFAULT TRUE,
    total_earnings NUMERIC(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_drivers_available ON drivers(is_available);


/* VEHICLES table */
CREATE TYPE vehicle_type AS ENUM ('bike','auto','car','sedan');

CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    driver_id INT NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
    type vehicle_type NOT NULL,
    vehicle_number VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_vehicle_driver ON vehicles(driver_id);


/* VEHICLES table */
CREATE TYPE vehicle_type AS ENUM ('bike','auto','car','sedan');

CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    driver_id INT NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
    type vehicle_type NOT NULL,
    vehicle_number VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_vehicle_driver ON vehicles(driver_id);


/* RIDES table */
CREATE TYPE ride_status AS ENUM (
    'requested',
    'accepted',
    'started',
    'completed',
    'cancelled'
);

CREATE TABLE rides (
    id SERIAL PRIMARY KEY,

    user_id INT NOT NULL REFERENCES users(id),
    driver_id INT REFERENCES drivers(id),

    pickup_lat NUMERIC(9,6) NOT NULL,
    pickup_lng NUMERIC(9,6) NOT NULL,
    drop_lat NUMERIC(9,6) NOT NULL,
    drop_lng NUMERIC(9,6) NOT NULL,

    status ride_status DEFAULT 'requested',

    fare NUMERIC(10,2) CHECK (fare >= 0),

    requested_at TIMESTAMP DEFAULT NOW(),
    started_at TIMESTAMP,
    completed_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_rides_user ON rides(user_id);
CREATE INDEX idx_rides_driver_status ON rides(driver_id, status);
/* CRITICAL CONSTRAINT (MOST IMPORTANT)  Ensures driver cannot take multiple rides*/
CREATE UNIQUE INDEX one_active_ride_per_driver
ON rides(driver_id)
WHERE status IN ('accepted','started');


/* PAYMENTS table */
CREATE TYPE payment_status AS ENUM (
    'pending',
    'success',
    'failed'
);

CREATE TYPE payment_method AS ENUM (
    'cash',
    'card',
    'upi'
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    ride_id INT UNIQUE REFERENCES rides(id) ON DELETE CASCADE,
    amount NUMERIC(10,2) NOT NULL CHECK (amount > 0),
    status payment_status DEFAULT 'pending',
    method payment_method,
    transaction_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_payments_ride ON payments(ride_id);


/* RATINGS table */
CREATE TYPE rating_given_by AS ENUM ('user','driver');

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    ride_id INT NOT NULL REFERENCES rides(id) ON DELETE CASCADE,
    given_by rating_given_by NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    UNIQUE (ride_id, given_by)
);

CREATE INDEX idx_payments_ride ON payments(ride_id);


/* ride_locations table */
CREATE TABLE ride_locations (
    id SERIAL PRIMARY KEY,
    ride_id INT REFERENCES rides(id) ON DELETE CASCADE,
    lat NUMERIC(9,6),
    lng NUMERIC(9,6),
    recorded_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_ride_locations_ride ON ride_locations(ride_id);



/* Relations */
-- users → rides (1:N)
-- drivers → rides (1:N)
-- drivers → vehicles (1:N)

-- rides → payments (1:1)
-- rides → ratings (1:N controlled)

-- driver → max 1 active ride (partial index)