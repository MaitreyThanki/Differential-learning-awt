app.controller("StudentController", function($scope) {

    $scope.student = {};
    $scope.students = [];
    $scope.semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    // Register student
    $scope.registerStudent = function() {
        if ($scope.studentForm.$valid) {
            $scope.students.push(
                angular.copy($scope.student)
            );

            $scope.student = {};
            $scope.studentForm.$setPristine();
            $scope.studentForm.$setUntouched();
        }
    };

    // Reset form
    $scope.resetForm = function() {
        $scope.student = {};
        $scope.studentForm.$setPristine();
        $scope.studentForm.$setUntouched();
    };

    // Delete student
    $scope.deleteStudent = function(index) {
        $scope.students.splice(index, 1);
    };

});
