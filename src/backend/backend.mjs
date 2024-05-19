import Fastify from "fastify";
import { Player } from "./player.mjs";


/*
import { exportAllCustomer, readCustomer, deleteCustomer } from "./customer.js";
import { createReport, customerReportStatusCheck, exportAllReports, readAllReportsByCustomer, readReports } from "./report.js";
import { createCustomer } from "./customer.js";
*/

// initialize the server
const fastify = Fastify({
    logger: true,
});

/*
// Declare a route
fastify.get('/getAllCustomers', async function handler (request, reply) {
    const exportedCustomers = exportAllCustomer();
    return exportedCustomers;
})

// API
fastify.post('/createCustomer', async function handler (request, reply) {
    createCustomer(request.body);
})
*/

try {
    await fastify.listen({port: 3000});
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}

fastify.get('/', async (request, reply) => {
    return { message: 'Hello, World!' };
});


const playerOne = new Player;

console.log(playerOne);