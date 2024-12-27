const maskedLink = `aHR0cHM6Ly90cmliZS1kb3NzaWVyLWZhbi13ZWJzaXRlLm9ucmVuZGVyLmNvbQ==`

const portLink = atob(maskedLink)

/* Gives error: Uncaught SyntaxError: Cannot use import statement outside a module */
/* Figure out how to export properly later */

export default portLink