# NgxNotyf - WIP
A minimal Angular wrapper for https://github.com/caroso1222/notyf

## Usage
To refer to the config and api and options and everything else, refer the original source at https://github.com/caroso1222/notyf
while things are developing here.

And here's how you will use those options in your project:

Install the package:
```bash
npm install ngx-notyf
# OR
yarn add ngx-notyf
```

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
<ngx-notyf [message]="message" [type]="type"></ngx-notyf>
```

where the inputs are defined in _ts_ file (such as in `app.component.ts`):

```typescript
  message: string = "Success! You did something good!";
  type: "success" | "error" = "success";
```

Another way to use it is via service:


```typescript
  constructor(private ngxNotyfService: NgxNotyfService) {}
  ngOnInit(): void {
    const options: Partial<INotyfOptions> = {
      position: {
        x: "left",
        y: "top",
      },
    };
    const notyfInstance = this.ngxNotyfService.setOptions();
  }
```