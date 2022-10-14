import * as yup from 'yup';
declare const transformSchemaToYup: (data: any, resolveExpressionCallback: any) => yup.ObjectSchema<{
    [x: string]: yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    [x: string]: yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>;
}>, import("yup/lib/object").AssertsShape<{
    [x: string]: yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>;
}>>;
export default transformSchemaToYup;
