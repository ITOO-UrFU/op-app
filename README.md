#  OP-App on Angular 2 

## Настройки Visual Studio Code для скрытия скомпелированных файлов
```
{
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js.map": true,
        "**/*.js": {
            "when": "$(basename).ts",
        },
    },
}
```