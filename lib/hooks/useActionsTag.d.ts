export declare const useActionsTag: (values: any, onChangeCallback?: ((e: any) => void) | undefined) => {
    options: any[];
    tags: any[];
    generalOptions: any[];
    onAddTag: (value: any) => void;
    onRemoveTag: (name: any) => void;
    onActivateEdit: (name: any, index: any) => void;
    onEditTag: (name: any, value: any) => any[];
};
