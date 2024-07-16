CREATE OR REPLACE FUNCTION calculate_total_sales(start_date DATE, end_date DATE) RETURNS NUMERIC AS $$
BEGIN
    RETURN (SELECT SUM(amount) FROM orders WHERE order_date BETWEEN start_date AND end_date);
END;
$$ LANGUAGE plpgsql;
