export default function validateFields(field: string) : boolean {
    if(field === undefined || field === null) return true;
    if(field.trim() === "") return true;
    if(field.trim().length < 3) return true;
    return false;
}