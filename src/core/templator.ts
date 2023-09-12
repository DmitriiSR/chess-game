
export class Templator {
    _template: string
    _templates: {[templateName: string]: string} = {}
    constructor(template: string) {
        this._template = template;
    }

    compile(data: {[propName: string]: any}, template = '') {
        if (!template) {
            template = this._template
        }

        console.log(data);

        return template
            .replace(/#(.*?)#/g, (_, tmplName: string) => {
                tmplName = tmplName.trim();
                return this._templates[tmplName]
            })
            .replace(/{{(.*?)}}/g, (_, variable) => {
                variable = variable.toString().trim()

                console.log(variable, data);

                if (typeof data[variable] === 'function') {
                    window[variable] = data[variable];
                    return variable + '()'
                } else {
                    return data[variable]
                }
            })
    }

    addTemplate(tmplName: string, tmpl: string, data: {[propName: string]: any} = {}) {
        console.log(1, data);
        tmpl = this.compile(data, tmpl)
        this._templates[tmplName] = tmpl;
        return this;
    }

    // test_compile(data: {[propName: string]: any}) {
    //     let result = '';
    //     let buffer = '';
    //     let inVariable = false;
    //
    //     for (let i = 0; i < this._template.length; i++) {
    //         const char = this._template[i];
    //
    //         if (char === '{' && this._template[i + 1] === '{') {
    //             inVariable = true;
    //             i++;
    //         } else if (char === '}' && this._template[i + 1] === '}') {
    //             inVariable = false;
    //             i++;
    //
    //             // Получаем имя переменной и заменяем на ее значение из данных
    //             const variableName = buffer.trim();
    //             buffer = '';
    //             if (data.hasOwnProperty(variableName)) {
    //                 result += data[variableName];
    //             }
    //         } else if (inVariable) {
    //             buffer += char;
    //         } else {
    //             result += char;
    //         }
    //     }
    //
    //     return result;
    // }
}