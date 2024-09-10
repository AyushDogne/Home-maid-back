const express = require("express");
const bodyParser = require("body-parser");
const multer  = require('multer')
const cors = require("cors");
const validation = require("validation");
var app = express();
app.use(cors());


app.use(express.urlencoded({extended:false}))


const storage = multer.diskStorage(
    {
        destination: function (req, file, cb)
        {
            return cb(null,"LabourFiles/")
        },

        filename: function (req, file, cb)
        {
           return  cb(null,`${Date.now()}-${file.originalname}`)
        }
    })

    const upload = multer({storage:storage})

    const uploadFields = upload.fields([

        { name: 'LabourAadhaarCardFront', maxCount: 1 },
        { name: 'LabourAadhaarCardback', maxCount: 1 },
        { name: 'LabourPanCard', maxCount: 1 },
        { name: 'LabourVoterIDfront', maxCount: 1 },
        { name: 'LabourVoterIDBack', maxCount: 1 },
    ]);

var server = app.listen(8081, function () {
    var port = server.address().port
    console.log("hello , the node server is listening to http://localhost:%s", port);
})

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

let initialState =
{
    labourData: [
        {
            LabourName: "",
            Labourage:"",
            LabourGender:"",
            LabourContact: "",
            LabourAlternateContactNumber: "",
            LabourParmanentAddress: "",
            LabourAlternateAddress: "",
            LabourFatherName: "",
            LabourMotherName: "",
            LabourFatherContactNumber: "",
            LabourMotherContactNumber: "",
            LabourMaritalstatus: "",
            LabourSpouseName: "",
            LabourSpouseContactNumber: "",
            LabourAadhaarCardFront: "",
            LabourAadhaarCardback: "",
            LabourAadhaarCardID: "",
            LabourPanCard: "",
            LabourPanCardID: "",
            LabourVoterIDfront: "",
            LabourVoterIDBack: "",
            LabourVoterID: "",
            LabourDOB: "",
            LabourCity: "",
            LabourState: "",
            LabourCountry: "",
            LabourEmailID: "",
        }
    ]
}

app.get("/getAllData", (req, res) => {
    $response = {
        'success': true,
        'initialState': initialState.labourData,
        'message': "Successfully fetched all data requested!"
    };
    res.status(200).json($response);
})

app.post("/SignUpLabour", uploadFields, (req, res) => 
{
    
    let {LabourName, Labourage , LabourGender, LabourContact, LabourAlternateContactNumber, LabourParmanentAddress,
        LabourAlternateAddress, LabourFatherName, LabourMotherName, LabourFatherContactNumber, LabourMotherContactNumber, LabourMaritalstatus, LabourSpouseName,
        LabourSpouseContactNumber, LabourAadhaarCardID, LabourPanCardID,
        LabourVoterID, LabourDOB, LabourCity, LabourState, LabourCountry, LabourEmailID } = req.body
    let {LabourAadhaarCardFront, LabourAadhaarCardback, LabourPanCard, LabourVoterIDfront, LabourVoterIDBack}=req.files

    if (!LabourName || !Labourage || !LabourGender || !LabourContact || !LabourAlternateContactNumber || !LabourParmanentAddress || !LabourAlternateAddress || !LabourFatherName || !LabourMotherName ||
        !LabourFatherContactNumber || !LabourMotherContactNumber || !LabourMaritalstatus || !LabourSpouseName || !LabourSpouseContactNumber || !LabourAadhaarCardFront || !LabourAadhaarCardback || !LabourAadhaarCardID || !LabourPanCardID || !LabourPanCard ||
        !LabourVoterIDfront || !LabourVoterIDBack || !LabourVoterID || !LabourDOB || !LabourCity || !LabourState || !LabourCountry || !LabourEmailID) 
    {

        $response = {
            'success': false,
            'message': "Please check the request and params hello  bhai aayush dogne!"
        };
        return res.status(400).json($response);
    }
    if (LabourName.trim() === "" || Labourage.trim()==="" || LabourGender.trim()==="" || LabourContact.trim() === "" || LabourAlternateContactNumber.trim() === "" || LabourParmanentAddress.trim() === "" || LabourAlternateAddress.trim() === "" || LabourFatherName.trim() === "" || LabourMotherName.trim() === "" ||
    LabourFatherContactNumber.trim() === "" || LabourMotherContactNumber.trim() === "" || LabourMaritalstatus.trim() === "" || LabourSpouseName.trim() === "" || LabourSpouseContactNumber.trim() === "" ||  LabourAadhaarCardID.trim() === "" || LabourPanCardID.trim() === "" 
    || LabourVoterID.trim() === "" || LabourDOB.trim() === "" || LabourCity.trim() === "" || LabourState.trim() === "" ||  LabourCountry.trim() === "" || LabourEmailID.trim() === "") 
    {
        $response = {
            'success': false,
            'message': "Params can't be black!"
        };
        return res.status(400).json($response);
    }
    else if (LabourName && Labourage && LabourGender && LabourContact && LabourAlternateContactNumber && LabourParmanentAddress && LabourAlternateAddress &&
        LabourFatherName && LabourMotherName && LabourFatherContactNumber && LabourMotherContactNumber && LabourMaritalstatus &&
        LabourSpouseName && LabourSpouseContactNumber && LabourAadhaarCardFront && LabourAadhaarCardback && LabourAadhaarCardID &&
        LabourPanCard && LabourPanCardID && LabourVoterIDfront && LabourVoterIDBack && LabourVoterID && LabourDOB && LabourCity && LabourState && LabourCountry && LabourEmailID) 
        {
        initialState.labourData.push(
            {
                LabourName: LabourName.trim(),
                Labourage : Labourage.trim(),
                LabourGender:LabourGender.trim(),
                LabourContact: LabourContact.trim(),
                LabourAlternateContactNumber: LabourAlternateContactNumber.trim(),
                LabourParmanentAddress: LabourParmanentAddress.trim(),
                LabourAlternateAddress: LabourAlternateAddress.trim(),
                LabourFatherName: LabourFatherName.trim(),
                LabourMotherName: LabourMotherName.trim(),
                LabourFatherContactNumber: LabourFatherContactNumber.trim(),
                LabourMotherContactNumber: LabourMotherContactNumber.trim(),
                LabourMaritalstatus: LabourMaritalstatus.trim(),
                LabourSpouseName: LabourSpouseName.trim(),
                LabourSpouseContactNumber: LabourSpouseContactNumber.trim(),
                LabourAadhaarCardFront: LabourAadhaarCardFront,
                LabourAadhaarCardback: LabourAadhaarCardback,
                LabourAadhaarCardID: LabourAadhaarCardID,
                LabourPanCard: LabourPanCard,
                LabourPanCardID: LabourPanCardID.trim(),
                LabourVoterIDfront: LabourVoterIDfront,
                LabourVoterIDBack: LabourVoterIDBack,
                LabourVoterID: LabourVoterID.trim(),
                LabourDOB: LabourDOB.trim(),
                LabourCity: LabourCity.trim(),
                LabourState: LabourState.trim(),
                LabourCountry: LabourCountry.trim(),
                LabourEmailID: LabourEmailID.trim()
            }
        )
        $response = {
            'success': true,
            'message': "Successfully Signed up!"
        };
        return res.status(200).json($response);
    }
    else {
        $response = {
            'success': false,
            'message': "Server issue occurred, please try again sometime later!"
        };
       return  res.status(500).json($response);
    }
})

