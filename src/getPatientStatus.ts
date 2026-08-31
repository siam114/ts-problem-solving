interface GeneralPatient {
    name: string,
    age: number,
    type: "general"
}

interface EmergencyPatient{
     name: string,
    age: number,
    type: 'emergency',
    emergencyLevel: 1 | 2 | 3
}

const getPatientStatus = (patient: GeneralPatient | EmergencyPatient):string=>{
     if(patient.type === 'general'){
        return 'General Patient'
     }else if(patient.type === "emergency"){
        if(patient.emergencyLevel === 1){
            return "Cretical Emergency"
        }else if(patient.emergencyLevel === 2){
            return "Serious Emergency"
        }
     }

     return "Moderate Emergency"

}

console.log(getPatientStatus({name: 'siam', age: 22, type: 'general'}))
console.log(getPatientStatus({name: 'jony', age: 25, type: 'emergency', emergencyLevel: 2
}))