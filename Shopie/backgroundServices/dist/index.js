"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_cron_1 = __importDefault(require("node-cron"));
const welcomeUser_1 = require("./mailservices/welcomeUser");
const notificationShipping_1 = require("./mailservices/notificationShipping");
const deliveryNotification_1 = require("./mailservices/deliveryNotification");
const app = (0, express_1.default)();
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    node_cron_1.default.schedule('*/10 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Checking for a new user');
        yield (0, welcomeUser_1.welcomeUser)();
    }));
});
const shippingNotification = () => __awaiter(void 0, void 0, void 0, function* () {
    node_cron_1.default.schedule('*/10 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Checking for orders with status of shipping');
        yield (0, notificationShipping_1.notificationShipping)();
    }));
});
const deliveryNotification = () => __awaiter(void 0, void 0, void 0, function* () {
    node_cron_1.default.schedule('*/10 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Checking for orders with status of shipping');
        yield (0, deliveryNotification_1.notificationDelivery)();
    }));
});
run();
shippingNotification();
deliveryNotification();
app.listen(4401, () => {
    console.log('Mail server up and running ................');
});
