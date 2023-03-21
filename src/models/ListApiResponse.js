class ListApiResponse {
    constructor(error, message, data) {
        this.error = error;
        this.message = message;
        this.data = data;
    }

    static errorKey() {
        return "error";
    }

    static messageKey() {
        return "message";
    }

    static dataKey() {
        return "data";
    }
    
    static fromJson(jsonData) {
        let error = jsonData[this.errorKey()];
        let message = jsonData[this.messageKey()];
        let data = jsonData[this.dataKey()];

        return new ListApiResponse(error, message, data);
    }
}

export default ListApiResponse;