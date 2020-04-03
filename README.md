# NgxNotyf - WIP
A minimal Angular wrapper for https://github.com/caroso1222/notyf

## Note
This library is still not published to npm. So your import statements won't actually work right now (unless you know how to use a library without npm).

## Usage
To refer to the config and api and options and everything else, refer the original source at https://github.com/caroso1222/notyf
while things are developing here.

And here's how you will use those options in your project:

Import the module in your project (usually in `app.module.ts`):

```typescript
import { NgxNotyfModule } from 'ngx-notyf';
```

Then add it to the imports array in the same file:

```typescript
imports: [
    NgxNotyfModule,
  ],
```

Then simply start using it in your views (such as in `app.component.html`):

```html
<ngx-notyf [config]="config" [message]="message" [type]="type"></ngx-notyf>
```

where the inputs are defined in _ts_ file (such as in `app.component.ts`):

```typescript
  message = "Send us an email to get support";
  type: "success" | "error" | string = "info";
  config: Partial<INotyfOptions> = {
    duration: 100 * 1000,
    ripple: false,
    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "info",
        background: "#2196f3",
      },
      {
        type: "error",
        background: "indianred",
        duration: 2000,
        dismissible: true,
      },
    ],
  };
```