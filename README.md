# Grill & Thrill

## Backend - Group 1

The final project of Rolling Code School, commission 63i, consists of creating a website inspired by fast food ordering applications for food restaurants.

## Used technology

It is necessary to have Node.js 20.6+ installed on the PC, and a MongoDB account to connect to your own, hosted or local DB; Express, etc.

- [Node.js](https://nodejs.org/en/) 
- [MongoDB](https://www.mongodb.com/)

## Facility

1. Clone this repository.
2. Run `npm install` to install the dependencies.

## Configuration

- Create a `.env` file in the project root and configure the necessary environment variables, which are defined in the `.env_sample` file.

## Use

- Option 1: Do the build

   To start the server, run:

   ```bash
   npm run build
   ```

   and with the build already done, execute:

   ```bash
   npm start
   ```

- Option 2: Development mode

   Otherwise, it can be run in development mode using:

   ```bash
   npm run dev
   ```

## API documentation

The table below details the endpoints of each available service:

#### Usuarios: 

Main route: `/api/v1/users`
| Method | Endpoint | Protected | Must be Admin | Description | Body |
| ------ | -------- | --------- | -------------- | ----------- | ---- |
| GET | `/` | ✅ | ✅ | Get all users | - |
| GET | `/:id` | ✅ | ❌ | Gets a user by their id | - |
| POST | `/` | ❌ | ❌ | Create a new user | `{ lastname: string, firstname: string, password: string, username: string }` |
| PUT | `/:id` | ✅ | ❌ | Update a user by their id | `{ isAdmin?: boolean, lastname?: string, firstname?: string, password?: string, username?: string }` |
| DELETE | `/:id` | ✅ | ❌ | Delete a user by their id (logical deletion) | - |

#### Authentication:

Main route: `/api/v1/auth`
| Method | Endpoint | Protected | Must be Admin | Description | Body |
| ------ | -------- | --------- | -------------- | ----------- | ---- |
| POST | `/login` | ❌ | ❌ |Sign in with a user | `{ password: string, username: string }` |

#### Products:

Main route: `/api/v1/products`
| Method | Endpoint | Protected | Must be Admin | Description | Body |
| ------ | -------- | --------- | -------------- | ----------- | ---- |
| GET | `/` | ❌ | ❌ | Get all products | - |
| GET | `/:id` | ❌ | ❌ | Get a product by its id | - |
| POST | `/` | ✅ | ✅ | Create a new product | `{ description: string, image: string, name: string, price: number  }` |
| PUT | `/:id` | ✅ | ✅ | Update a product by its id | `{ description?: string, image?: string, name?: string, price?: number  }` |
| DELETE | `/:id` | ✅ | ✅ | Delete a product by its id (logical deletion) | - |

## Members

- [Cardozo, Martín](https://github.com/CardozoMartin)
-  [Deblinger, Bianca D.](https://github.com/biandeb)
-  [Elias, Juliana](https://github.com/eliasjuliana)