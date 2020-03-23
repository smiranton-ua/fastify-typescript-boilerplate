export interface EmailPayload {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export interface InitializePayload {
  from: string;
}
