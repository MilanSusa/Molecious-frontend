# Molecious frontend

Molecious frontend is a React PWA that uses [Skin Cancer Detection Inference API][1] through [Molecious backend][2] in
order to provide the user an option of taking a picture of a potentially dangerous mole and detecting if any important 
diagnostic categories are present.

## Prerequisites

1) Download [Node.js][3] and [Yarn][4].
2) Create `MOLECIOUS_BACKEND_URL` environment variable and set it to `http://localhost:8080`.
3) Follow the steps for running [Molecious backend][2].

[1]: https://github.com/MilanSusa/Skin-Cancer-Detection-Inference-API
[2]: https://github.com/MilanSusa/Molecious-backend
[3]: https://nodejs.org/en/
[4]: https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Running locally

Navigate to the root of the project and run the following command:

    yarn install
    
Navigate to `/client` and execute the same command.

To start the application, execute the following command from the root of the project:

    yarn dev

You can access the application via:
    
    http://localhost:3000

## License

Licensed under the [MIT License](LICENSE).