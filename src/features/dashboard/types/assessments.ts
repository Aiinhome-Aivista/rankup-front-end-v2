export type AssessmentStatus = "Ongoing" | "Draft" | "Completed";
export type AssessmentAction = "view" | "edit" | "share";

export interface Assessment {
    title: string;
    class: string;
    status: AssessmentStatus;
    attempts: string;
    action: AssessmentAction;
}
