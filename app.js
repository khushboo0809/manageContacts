var app = angular.module("myContactList", []); 

app.controller("contactCtrl", function($scope) {
    var  valueTobeupdated = "";

    $scope.products = [{fName: 'Mike', lName: 'Robert', email: 'miin@gmail.com', phone: 8889228282, status: 'active'},{fName: 'Robert', lName: 'John', email: 'johnn@gmail.com', phone: 8373737377, status: 'active'},{fName: 'Tom', lName: 'Mike', email: 'tomj@gmail.com', phone: 8448488488, status: 'active'}];
    $scope.editorEnabled = false;
    $scope.details = {};
    $scope.mandatoryFieldsValidation = true;
    $scope.showContactDetails = false;
    
    /*
    Function name: addItem()
    return: none
    description: Check if form is valid and the phone number is unique then push the contact details in contacts array.
    */
    $scope.addItem = function () {
        $scope.showContactDetails = false;
        $scope.errortext = "";

        if ($scope.products.indexOf($scope.details.fName) == -1) {
            $scope.products.push({"fName":$scope.details.fName, "lName":$scope.details.lName, "email": $scope.details.email, "phone": $scope.details.phone, "status": $scope.details.status});
        } else {
            $scope.errortext = "This conatct is already in your contact list.";
        }
        
        $scope.details = {};
    }
    
     /*
    Function name: removeItem()
    return: none
    description: To remove particular value in contact list.
    */
    $scope.removeItem = function (x) {
        $scope.showContactDetails = false;
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
    
     /*
    Function name: enableEdit()
    return: none
    description: To edit particular contact value in contact list.
    */
    $scope.enableEdit = function(x){
        $scope.showContactDetails = false;
        $scope.editorEnabled = true;
        valueTobeupdated = x;
        $scope.products.forEach(function(val,ind){
            if (val == $scope.products[x])
            {
                $scope.details.fName = $scope.products[ind].fName;
                $scope.details.lName = $scope.products[ind].lName;
                $scope.details.email = $scope.products[ind].email;
                $scope.details.phone = $scope.products[ind].phone;
            }
        })

    }
    
     /*
    Function name: saveContact()
    return: none
    description: To save particular edited contact value in contact list.
    */
    $scope.saveContact = function(){
        $scope.showContactDetails = false;
        $scope.products.splice(valueTobeupdated, 1 ,{"fName":$scope.details.fName, "lName":$scope.details.lName, "email": $scope.details.email, "phone": $scope.details.phone, "status": $scope.details.status});
        $scope.editorEnabled = false;
        $scope.details = {};

    }
    
     /*
    Function name: showDetails()
    return: none
    description: To show detailed information of particular contact value from contact list.
    */
    $scope.showDetails = function(value){
        $scope.showContactDetails = true;
        $scope.fullName = value.fName + " " + value.lName;
        $scope.selectedEmail = value.email;
        $scope.selectedPhone = value.phone;
        $scope.selectedStatus = value.status;
    }
});