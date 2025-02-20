const connectDB = require("./config/db");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const couponRoutes = require("./routes/couponRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

// Configurar dotenv para variables de entorno del proyecto
dotenv.config();

// Inicializar express
const app = express();
const PORT = process.env.PORT || 4000;

// Midlewares
app.use(express.json());

// Uso de Rutas (Routes)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);

// Conexión de base de datos
connectDB();

// Crear servidor HTTP y configurar socket.io
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

// Configurar eventos de socket.io
io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");

    socket.on("disconnect", () => {
        console.log("Cliente desconectado");
    });

    // Evento para notificar la creación de un producto
    socket.on("productoCreado", (data) => {
        io.emit("productoCreado", data);
    });

    // Evento para notificar la actualización de un producto
    socket.on("productoActualizado", (data) => {
        io.emit("productoActualizado", data);
    });

    // Evento para notificar la eliminación de un producto
    socket.on("productoEliminado", (data) => {
        io.emit("productoEliminado", data);
    });
});

// Usar el middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor y poner a escuchar el puerto configurado por defecto
server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});