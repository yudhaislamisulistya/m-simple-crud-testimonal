const Const = () => {
    const dev = process.env.NODE_ENV !== 'production'
    const { DEV_URL, PROD_URL } = process.env
    return { dev, DEV_URL, PROD_URL }
}

export default Const;