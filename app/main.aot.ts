import {platformNativeScript} from "nativescript-angular/platform-static";
import {AppModuleNgFactory} from "./app.module.ngfactory";
import {registerElement} from "nativescript-angular";

registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab);

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
