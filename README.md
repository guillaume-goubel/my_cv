# My CV

This project is a simple presentation of professional experiences and personal details.

## Getting Started

### Dependencies

* PHP ^8.1
* node ^18.18.0
* node package manager (for examples below using npm ^9.8.1)

### Installing

```
1 git clone https://github.com/guillaume-goubel/my_cv.git
2 composer install
3 npm install
4 mkdir .env.local (for dataBase)
```

### Parameters

.env.local
```
APP_VERSION=YYYYMMDD" 
here date in format YYYYMMDD : example 20240112
```

```
IS_INTEREST_DETAILS_ENABLED="true OR false"
This option allows or not a detail window to appear when the user clicks on an “Interest” category
```

### Executing program

* Dev
```
npm run watch
symfony server:start (with symfony CLI)
```

* Prod
```
npm run build
redirect to public folder => index.php
```




