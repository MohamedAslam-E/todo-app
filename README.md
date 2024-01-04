# Electron ToDo App

This repository contains a ToDo application built with Electron.js (frontend) and Node.js (backend).

## Features

- **Cross-Platform:** Electron ensures compatibility with Windows, macOS, and Linux.
- **Node.js Backend:** Utilizes Node.js for a lightweight and efficient server.
- **Persistent Storage:** ToDo items are stored locally for data persistence.
- **Responsive UI:** Intuitive interface for task management.


[todo-1](images/todo.png) 

## Getting Started

1. Clone the repository: `git clone https://github.com/MohamedAslam-E/todo-app.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Start the app: `npm start`

## Technologies Used

- **Electron.js:** Framework for cross-platform desktop applications.
- **Node.js:** JavaScript runtime for server-side development.

### Documentation

- Swagger based documentations are generated at `/docs` route (`http://localhost:2001/api/docs`)

### Packaging

- for windows: `npm run build:win`
  This command will generate the Windows installer in the dist directory.
- for mac: `npm run build:mac`
  This command will generate the macOS installer in the dist directory.
- for linux: `npm run build:linux`
  This command will generate the Linux installer in the dist directory.

## Contributing

Please follow our [Contribution Guidelines](CONTRIBUTING.md) if you'd like to contribute.