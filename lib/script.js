/**
 * Process a property that is held for sale
 * @param {org.userdetails.createDocument} documentData
 * @transaction
 */

function createDocument(documentData){
  return getAssetRegistry('org.userdetails.Document').then(function(documentRegistry){
        var NS='org.userdetails';
        var factory=getFactory();
        var docID=documentData.docID;
        var document=factory.newResource(NS,'Document',docID);
      
        var relationship=getCurrentParticipant();
       	document.employee=relationship;
        document.fname=documentData.fname;
        document.lname=documentData.lname;
        document.mobileno=documentData.mobileno;
        document.country=documentData.country;
        document.city=documentData.city;
    	document.address=documentData.address;
    	document.driving_licence_number=documentData.driving_licence_number;
    	document.alien_registration_number=documentData.alien_registration_number;
        document.my_number=documentData.my_number;
    	document.DOB=documentData.DOB;
        return documentRegistry.add(document)


    });
}
/**
* @param {org.userdetails.updateDocument} documentData
* @transaction
*/
function updateDocument(documentData){
  return getAssetRegistry('org.userdetails.Document').then(function(documentRegistry){
    var docID=documentData.docID;
    return documentRegistry.get(docID).then((data)=>{
          data.fname=documentData.fname;
          data.lname=documentData.lname;
          data.mobileno=documentData.mobileno;
          data.country=documentData.country;
          data.city=documentData.city;
          data.address=documentData.address;
          data.driving_licence_number=documentData.driving_licence_number;
          data.alien_registration_number=documentData.alien_registration_number;
          data.my_number=documentData.my_number;
          data.DOB=documentData.DOB;
          return documentRegistry.update(data);
	    })
    });
}
