CREATE OR REPLACE FUNCTION update_inventory() RETURNS TRIGGER AS $$
BEGIN
    UPDATE products SET stock = stock - NEW.quantity WHERE id = NEW.product_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_inventory_trigger
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION update_inventory();
