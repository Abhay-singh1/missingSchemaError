# missingSchemaError

This is the file which will help u understand what is going wrong with my files

I started running the server and kept getting the error:

MissingSchemaError: Schema hasn't been registered for model "new".
Use mongoose.model(name, schema)
    at Mongoose.model (C:\Users\abhay\firstapp\node_modules\mongoose\lib\index.js:516:13)
    at Object.<anonymous> (C:\Users\abhay\firstapp\models\Users.js:32:30)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at Object.<anonymous> (C:\Users\abhay\firstapp\routes\api\users.js:1:14)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Module.require (internal/modules/cjs/loader.js:1089:19)
    at require (internal/modules/cjs/helpers.js:73:18)
    at Object.<anonymous> (C:\Users\abhay\firstapp\server.js:15:23)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
[nodemon] app crashed - waiting for file changes before starting...

Apparently this error means that my schema is not getting registered in the database
there is something wong with the name parameter on the module.export line in Users.js file

Please help me rectify the problem 
Regards,
Abhay.
