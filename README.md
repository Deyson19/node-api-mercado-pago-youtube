# Integrar Mercado Pago en Node.js

## Descripción del Proyecto

Este proyecto es una API REST desarrollada en Node.js con TypeScript que integra el servicio de **Mercado Pago** para permitir la gestión de pagos en aplicaciones. La API permite crear una solicitud de pago y recibir el estado de la transacción.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos:

- **Node.js** (versión 18 o superior)
- **pnpm** (gestor de paquetes de Node.js)
- Una cuenta en **Mercado Pago**. Si no tienes una, puedes crearla [aquí](https://www.mercadopago.com.co/developers).
- **Conocimientos o bases de TypeScript y JavaScript** para una mejor comprensión del código porque no es un tutorial para principiantes o con poca experiencia en programación.
- **Saber que es un servicio tipo API REST**
- **Saber que es un servicio de pagos online**

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Deyson19/node-api-mercado-pago-youtube.git
   cd node-api-mercado-pago-youtube
   ```

2. Instalar pnpm si no lo tienes instalado:
   ```bash
   npm install -g pnpm
   ```
3. Instala los paquetes necesarios:
   ```bash
   pnpm install
   ```
4. Arrancar la aplicación con:

   ```bash
   pnpm start
   ```

5. Accede a la API en tu navegador en [http://localhost:3000](http://localhost:3000). Asumiendo que el puerto es el '3000'

## NOTAS:

- Se puede utilizar herramientas como Postman para realizar peticiones HTTP. En ese caso el llamado sería al endpoint de crear pago: [http://localhost:3000/api/pago/create](http://localhost:3000/api/pago/create)
- En mi caso tengo instalado `nodemon` de forma global en mi equipo, por lo tanto no fue necesaria la instalación mediante pnpm, si por el contrario no lo tienen instalado, entonces realicen la instalación.
