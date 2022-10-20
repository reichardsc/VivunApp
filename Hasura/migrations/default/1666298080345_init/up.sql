SET standard_conforming_strings = off;
SET check_function_bodies = false;
SET escape_string_warning = off;
CREATE TABLE public.customer (
    customer_id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL
);
CREATE SEQUENCE public.customer_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.customer_customer_id_seq OWNED BY public.customer.customer_id;
CREATE TABLE public.product (
    product_id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL
);
CREATE TABLE public.sale (
    sale_id integer NOT NULL,
    customer_id integer NOT NULL,
    product_id integer NOT NULL
);
CREATE VIEW public.customer_total_sales AS
 SELECT customer.customer_id,
    customer.first_name,
    customer.last_name,
    sum(product.price) AS total_price
   FROM ((public.sale
     JOIN public.customer ON ((customer.customer_id = sale.customer_id)))
     JOIN public.product ON ((product.product_id = sale.product_id)))
  GROUP BY customer.customer_id, customer.first_name, customer.last_name;
CREATE TABLE public.employee (
    employee_id integer NOT NULL
);
CREATE SEQUENCE public.employee_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.employee_employee_id_seq OWNED BY public.employee.employee_id;
CREATE SEQUENCE public.product_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;
CREATE SEQUENCE public.sale_sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.sale_sale_id_seq OWNED BY public.sale.sale_id;
ALTER TABLE ONLY public.customer ALTER COLUMN customer_id SET DEFAULT nextval('public.customer_customer_id_seq'::regclass);
ALTER TABLE ONLY public.employee ALTER COLUMN employee_id SET DEFAULT nextval('public.employee_employee_id_seq'::regclass);
ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);
ALTER TABLE ONLY public.sale ALTER COLUMN sale_id SET DEFAULT nextval('public.sale_sale_id_seq'::regclass);
ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (employee_id);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);
ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_pkey PRIMARY KEY (sale_id);
ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(product_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
