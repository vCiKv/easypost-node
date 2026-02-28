export declare interface IFieldError {
  /**
   * Field of the request that the error describes
   */
  field: string;
  /**
   * Human readable description of the problem
   */
  message: string;
  /**
   * Error code of the request
   */
  code?: string;
  /**
   * possible error fix if available 
   */
  suggestion?: string;
}
