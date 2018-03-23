## Running

### Setup for Mac

Make sure you've followed the Mac Basic Setup under Development Setup on Confluence

1. In a command window, cd to root folder of this project and ensure dependencies are installed

    ```
    yarn install
    ```

2. Add a .env file to the root of the project and use the format of .env.example to populate the file with the correct paths for the environment variables

3. Run the build

  a. To build in dev environment (local) and watch files

    ```
    yarn run devBuild
    ```
  
  b. To build in stage
    
    ```
    yarn run stageBuild
    ```
  
  c. To build in production
    
    ```
    yarn run prodBuild
    ``` 

4. we need to ignore linebreak-style style-rules as below mentioned

    Setup enviroment prefernce:

    "files.eol" : "\n"

    Or setup using

    ```
    'linebreak-style': ['error', 'unix'],    ----for MAC
    'linebreak-style': ['error', 'windows'], ----for Window
    ``` 

5. In a second command window (launched from root folder) run the app

    ```
    yarn run start
    ```





You can then view the demo application in a browser at localhost:3000.

### Setup for PC

Make sure you've followed the PC Basic Setup under Development Setup on Confluence.

* Follow the steps in Setup for Mac

You can then view the demo application in a browser at localhost:3000.