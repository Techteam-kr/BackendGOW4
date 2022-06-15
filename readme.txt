
1) URL - localhost:9002/searchApplicant - POST
   Request -  {
    "searchValue" : "111123123"
}
SearchValue is the FormID
    Response - [
    {
        "_id": "62a9b11eeb99fc246959a612",
        "aadharNumber": "12345",
        "mobileNumber": "111",
        "wardNumber": "123123",
        "id": "111123123",
        "yojanaName": "Pradhan Mantri Awas Yojana",
        "status": "Applied",
        "__v": 0
    }
]

///////////////////////////////////////////////////////////////////////

2) URL - localhost:9002/updateApplicantion - POST
   Request -  {
    "formid" : "1",
    "status" : "Accepted"
}
statuss is "Applied" - BY DEFAULT
Status Values - "Accepted" , "Rejected" , "inProgress"

    Response - Status is Updated

///////////////////////////////////////////////////////////////////////

3)  URL - localhost:9002/dashboardStatus - POST
   Request -  {
    "yojanaName" : "Pradhan Mantri Awas Yojana"
}


    Response - {
    "Applied": 2,
    "inProgress": 1,
    "Rejected": 0,
    "Accepted": 1,
    "total": 4
}
