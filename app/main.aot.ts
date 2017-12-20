import {platformNativeScript} from "nativescript-angular/platform-static";
import {AppModuleNgFactory} from "./app.module.ngfactory";
import * as elementRegistryModule from 'nativescript-angular/element-registry';

elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
elementRegistryModule.registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
