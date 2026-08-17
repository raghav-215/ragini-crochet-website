-- STREAMING_CHUNK: SQL Database Schema Definition
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Sample Data
INSERT INTO products (title, category, price, description, image_url) VALUES
('Pastel Daisy Tote Bag', 'accessories', 899.00, 'Hand-crocheted daisy flower square canvas bag.', 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7'),
('Amigurumi Cute Bunny Plushie', 'toys', 599.00, 'Soft plush velvet bunny toy with safety eyes.', 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca'),
('Boho Crochet Crop Top', 'wearables', 1199.00, '100% Breathable cotton yarn top perfect for summer.', 'https://images.unsplash.com/photo-1516762689617-e1cffffd478d');