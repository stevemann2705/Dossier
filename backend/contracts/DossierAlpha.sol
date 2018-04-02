pragma solidity ^0.4.18;

contract DossierAlpha {
    address owner;
    
    struct Student{
        string name;
        uint roll_number;
        string name_father;
        string name_mother;
        X X_marks;
        XII XII_marks;
        BTech BTech_marks;
    }
    
    struct X{
        uint english;
        uint maths;
        uint science;
        uint social_science;
        uint computer_science;
        
        uint percentage;    //divide by 10 to get actual percentage
        uint cgpa;          //divide by 100 to get actual CGPA
    }
    
    struct XII{
        uint english;
        uint maths;
        uint physics;
        uint chemistry;
        uint computer_science;
        
        uint percentage;    //divide by 10 to get actual percentage
    }
    
    struct BTech{
        mapping(uint => uint) marks;    //mapping from subject_code to marks
    }
    
    mapping(uint => string) subject_codes;  //mapping from subject_codes to subject name
    mapping(uint => Student) data;      //mapping from roll_number to Student data
    
    function DossierAlpha() public {
        owner = msg.sender;
        
        data[8114902016].name = "Steve Mann";
        data[8114902016].name_mother = "Maya Mann";
        data[8114902016].name_father = "Joginder Singh Mann";
        data[8114902016].roll_number = 8114902016;
        
        data[8114902016].X_marks.english = 83;
        data[8114902016].X_marks.maths = 90;
        data[8114902016].X_marks.science = 93;
        data[8114902016].X_marks.social_science = 83;
        data[8114902016].X_marks.computer_science = 98;
        data[8114902016].X_marks.percentage = 894;
        data[8114902016].X_marks.cgpa = 894;
        
        data[8114902016].XII_marks.english = 80;
        data[8114902016].XII_marks.maths = 85;
        data[8114902016].XII_marks.physics = 93;
        data[8114902016].XII_marks.chemistry = 84;
        data[8114902016].XII_marks.computer_science = 98;
        data[8114902016].XII_marks.percentage = 880;
        
        
        data[8214902016].name = "Viplove Sharma";
        data[8214902016].name_mother = "Saraswati Sharma";
        data[8214902016].name_father = "Dinesh Sharma";
        data[8214902016].roll_number = 8214902016;
        
        data[8214902016].X_marks.english = 90;
        data[8214902016].X_marks.maths = 70;
        data[8214902016].X_marks.science = 82;
        data[8214902016].X_marks.social_science = 83;
        data[8214902016].X_marks.computer_science = 92;
        data[8214902016].X_marks.percentage = 834;
        data[8214902016].X_marks.cgpa = 834;
        
        data[8214902016].XII_marks.english = 90;
        data[8214902016].XII_marks.maths = 80;
        data[8214902016].XII_marks.physics = 95;
        data[8214902016].XII_marks.chemistry = 95;
        data[8214902016].XII_marks.computer_science = 92;
        data[8214902016].XII_marks.percentage = 904;
        
        data[8314902016].name = "Tanmay Mohan";
        data[8314902016].name_mother = "Alka Mohan";
        data[8314902016].name_father = "Anuraj Mohan";
        data[8314902016].roll_number = 8314902016;
        
        data[8314902016].X_marks.english = 70;
        data[8314902016].X_marks.maths = 33;
        data[8314902016].X_marks.science = 82;
        data[8314902016].X_marks.social_science = 93;
        data[8314902016].X_marks.computer_science = 92;
        data[8314902016].X_marks.percentage = 739;
        data[8314902016].X_marks.cgpa = 739;
        
        data[8314902016].XII_marks.english = 80;
        data[8314902016].XII_marks.maths = 33;
        data[8314902016].XII_marks.physics = 95;
        data[8314902016].XII_marks.chemistry = 91;
        data[8314902016].XII_marks.computer_science = 95;
        data[8314902016].XII_marks.percentage = 788;
                
        data[8414902016].name = "Aman Sharma";
        data[8414902016].name_mother = "Saru Sharma";
        data[8414902016].name_father = "Dinu Sharma";
        data[8414902016].roll_number = 8414902016;
        
        data[8414902016].X_marks.english =76 ;
        data[8414902016].X_marks.maths = 68;
        data[8414902016].X_marks.science = 92;
        data[8414902016].X_marks.social_science = 93;
        data[8414902016].X_marks.computer_science = 98;
        data[8414902016].X_marks.percentage = 854;
        data[8414902016].X_marks.cgpa = 854;
        
        data[8414902016].XII_marks.english = 80;
        data[8414902016].XII_marks.maths = 85;
        data[8414902016].XII_marks.physics = 95;
        data[8414902016].XII_marks.chemistry = 95;
        data[8414902016].XII_marks.computer_science = 95;
        data[8414902016].XII_marks.percentage = 900;
        
        data[8514902016].name = "Vasu Gupta";
        data[8514902016].name_mother = "Shweta Gupta";
        data[8514902016].name_father = "Kuldeep Gupta";
        data[8514902016].roll_number = 8514902016;
        
        data[8514902016].X_marks.english =44 ;
        data[8514902016].X_marks.maths = 65;
        data[8514902016].X_marks.science = 98;
        data[8514902016].X_marks.social_science = 33;
        data[8514902016].X_marks.computer_science = 58;
        data[8514902016].X_marks.percentage = 596;
        data[8514902016].X_marks.cgpa = 596;
        
        data[8514902016].XII_marks.english = 84;
        data[8514902016].XII_marks.maths = 85;
        data[8514902016].XII_marks.physics = 55;
        data[8514902016].XII_marks.chemistry = 75;
        data[8514902016].XII_marks.computer_science = 55;
        data[8514902016].XII_marks.percentage = 708;
        
        data[8614902016].name = "Shourya Negi";
        data[8614902016].name_mother = "Sharda Negi";
        data[8614902016].name_father = "Guddu Negi";
        data[8614902016].roll_number = 8614902016;
        
        data[8614902016].X_marks.english =42 ;
        data[8614902016].X_marks.maths = 66;
        data[8614902016].X_marks.science = 97;
        data[8614902016].X_marks.social_science = 63;
        data[8614902016].X_marks.computer_science = 78;
        data[8614902016].X_marks.percentage = 692;
        data[8614902016].X_marks.cgpa = 692;
        
        data[8614902016].XII_marks.english = 54;
        data[8614902016].XII_marks.maths = 65;
        data[8614902016].XII_marks.physics = 85;
        data[8614902016].XII_marks.chemistry = 75;
        data[8614902016].XII_marks.computer_science = 85;
        data[8614902016].XII_marks.percentage = 728;
    
            
        data[8714902016].name = "Bhavya Sharma";
        data[8714902016].name_mother = "Anita Sharma";
        data[8714902016].name_father = "Vaibhav Sharma";
        data[8714902016].roll_number = 8714902016;
        
        data[8714902016].X_marks.english =74 ;
        data[8714902016].X_marks.maths = 85;
        data[8714902016].X_marks.science = 98;
        data[8714902016].X_marks.social_science = 63;
        data[8714902016].X_marks.computer_science = 78;
        data[8714902016].X_marks.percentage = 796;
        data[8714902016].X_marks.cgpa = 796;
        
        data[8714902016].XII_marks.english = 54;
        data[8714902016].XII_marks.maths = 75;
        data[8714902016].XII_marks.physics = 85;
        data[8714902016].XII_marks.chemistry = 65;
        data[8714902016].XII_marks.computer_science = 85;
        data[8714902016].XII_marks.percentage = 728;
    
    
        data[8814902016].name = "Soumya Sharma";
        data[8814902016].name_mother = "Anita Sharma";
        data[8814902016].name_father = "Vaibhav Sharma";
        data[8814902016].roll_number = 8814902016;
        
        data[8814902016].X_marks.english =54 ;
        data[8814902016].X_marks.maths = 45;
        data[8814902016].X_marks.science = 97;
        data[8814902016].X_marks.social_science = 43;
        data[8814902016].X_marks.computer_science = 68;
        data[8814902016].X_marks.percentage = 614;
        data[8814902016].X_marks.cgpa = 614;
        
        data[8814902016].XII_marks.english = 45;
        data[8814902016].XII_marks.maths = 75;
        data[8814902016].XII_marks.physics = 85;
        data[8814902016].XII_marks.chemistry = 85;
        data[8814902016].XII_marks.computer_science = 45;
        data[8814902016].XII_marks.percentage = 670;
        
        data[8914902016].name = "Kamalpreet Singh";
        data[8914902016].name_mother = "Gurvinder Kaur";
        data[8914902016].name_father = "Gurjinder Singh";
        data[8914902016].roll_number = 8914902016;
        
        data[8914902016].X_marks.english =87 ;
        data[8914902016].X_marks.maths = 65;
        data[8914902016].X_marks.science = 57;
        data[8914902016].X_marks.social_science = 78;
        data[8914902016].X_marks.computer_science = 88;
        data[8914902016].X_marks.percentage = 750;
        data[8914902016].X_marks.cgpa = 750;
        
        data[8914902016].XII_marks.english = 57;
        data[8914902016].XII_marks.maths = 76;
        data[8914902016].XII_marks.physics = 75;
        data[8914902016].XII_marks.chemistry = 65;
        data[8914902016].XII_marks.computer_science = 95;
        data[8914902016].XII_marks.percentage = 736;
        
        data[9014902016].name = "Gaurav Sharma";
        data[9014902016].name_mother = "Vaishali Sharma";
        data[9014902016].name_father = "Harshvardhan Sharma";
        data[9014902016].roll_number = 8814902016;
        
        data[9014902016].X_marks.english =98 ;
        data[9014902016].X_marks.maths = 89;
        data[9014902016].X_marks.science = 67;
        data[9014902016].X_marks.social_science = 98;
        data[9014902016].X_marks.computer_science = 78;
        data[9014902016].X_marks.percentage = 860;
        data[9014902016].X_marks.cgpa = 860;
        
        data[9014902016].XII_marks.english = 85;
        data[9014902016].XII_marks.maths = 95;
        data[9014902016].XII_marks.physics = 85;
        data[9014902016].XII_marks.chemistry = 95;
        data[9014902016].XII_marks.computer_science = 75;
        data[9014902016].XII_marks.percentage = 870;
        
        }
    
    function set_name(uint _roll_number, string _name) public onlyOwner{
        data[_roll_number].name = _name;
    }
    
    function set_name_father(uint _roll_number, string _name_father) public onlyOwner{
        data[_roll_number].name_father = _name_father;
    }
    
    function set_name_mother(uint _roll_number, string _name_mother) public onlyOwner{
        data[_roll_number].name_mother = _name_mother;
    }
    
    function get_name(uint _roll_number) public constant returns(string){
        return data[_roll_number].name;
    }
    
    function get_name_father(uint _roll_number) public constant returns(string){
        return data[_roll_number].name_father;
    }
    
    function get_name_mother(uint _roll_number) public constant returns(string){
        return data[_roll_number].name_mother;
    }
    
    function set_data(uint _roll_number, string _name, string _name_father, string _name_mother) public onlyOwner {
        data[_roll_number].name = _name;
        data[_roll_number].name_mother = _name_mother;
        data[_roll_number].name_father = _name_father;
        data[_roll_number].roll_number = _roll_number;
    }
    
    function get_data(uint _roll_number) public constant returns(string, string, string){
        return (data[_roll_number].name, data[_roll_number].name_father, data[_roll_number].name_mother);
    }
    
    function set_marks_X_english(uint _roll_number, uint _X_english) public onlyOwner{
        require(_X_english<=100); 
        data[_roll_number].X_marks.english = _X_english;
    }
    
    function set_marks_X_maths(uint _roll_number, uint _X_maths) public onlyOwner{
        require(_X_maths<=100);
        data[_roll_number].X_marks.maths = _X_maths;
    }
    
    function set_marks_X_science(uint _roll_number, uint _X_science) public onlyOwner{
        require(_X_science<=100);
        data[_roll_number].X_marks.science = _X_science;
    }
    
    function set_marks_X_social_science(uint _roll_number, uint _X_social_science) public onlyOwner{
        require(_X_social_science<=100);
        data[_roll_number].X_marks.social_science = _X_social_science;
    }
    
    function set_marks_X_computer_science(uint _roll_number, uint _X_computer_science) public onlyOwner{
        require(_X_computer_science<=100);
        data[_roll_number].X_marks.computer_science = _X_computer_science;
    }
    
    function set_marks_X_percentage(uint _roll_number, uint _X_percentage) public onlyOwner{
        require(_X_percentage<=100);
        data[_roll_number].X_marks.percentage = _X_percentage;
    }
    
    function set_marks_X_cgpa(uint _roll_number, uint _X_cgpa) public onlyOwner{
        require(_X_cgpa<=10);
        data[_roll_number].X_marks.cgpa = _X_cgpa;
    }
    
    function get_marks_X_english(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.english;
    }
    
    function get_marks_X_maths(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.maths;
    }
    
    function get_marks_X_science(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.science;
    }
    
    function get_marks_X_social_science(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.social_science;
    }
    
    function get_marks_X_computer_science(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.computer_science;
    }
    
    function get_marks_X_percentage(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.percentage;
    }
    
    function get_marks_X_cgpa(uint _roll_number) public constant returns(uint){
        return data[_roll_number].X_marks.cgpa;
    }
    
    function set_marks_X(uint _roll_number, uint _X_english, uint _X_maths, uint _X_science, uint _X_social_science,
                                uint _X_computer_science, uint _X_percentage, uint _X_cgpa) public onlyOwner {
        require( (_X_english<=100) && (_X_maths<=100) && (_X_science<=100) && (_X_social_science<=100) && (_X_computer_science<=100) && (_X_percentage<=1000) && (_X_cgpa<=1000));
        data[_roll_number].X_marks.english = _X_english;
        data[_roll_number].X_marks.maths = _X_maths;
        data[_roll_number].X_marks.science = _X_science;
        data[_roll_number].X_marks.social_science = _X_social_science;
        data[_roll_number].X_marks.computer_science = _X_computer_science;
        data[_roll_number].X_marks.percentage = _X_percentage;
        data[_roll_number].X_marks.cgpa = _X_cgpa;
    }
    
    function get_marks_X(uint _roll_number) public constant returns(uint,uint,uint,uint,uint,uint,uint){
        return (data[_roll_number].X_marks.english, data[_roll_number].X_marks.maths, data[_roll_number].X_marks.science,
                    data[_roll_number].X_marks.social_science, data[_roll_number].X_marks.computer_science,
                    data[_roll_number].X_marks.percentage, data[_roll_number].X_marks.cgpa);
    }
    
    function set_marks_XII_english(uint _roll_number, uint _XII_english) public onlyOwner{
         require(_XII_english<=100);
        data[_roll_number].XII_marks.english = _XII_english;
    }
    
    function set_marks_XII_maths(uint _roll_number, uint _XII_maths) public onlyOwner{
         require(_XII_maths<=100);
        data[_roll_number].XII_marks.maths = _XII_maths;
    }
    
    function set_marks_XII_physics(uint _roll_number, uint _XII_physics) public onlyOwner{
         require(_XII_physics<=100);
        data[_roll_number].XII_marks.physics= _XII_physics;
    }
    
    function set_marks_XII_chemistry(uint _roll_number, uint _XII_chemistry) public onlyOwner{
         require(_XII_chemistry<=100);
        data[_roll_number].XII_marks.chemistry = _XII_chemistry;
    }
    
    function set_marks_XII_computer_science(uint _roll_number, uint _XII_computer_science) public onlyOwner{
         require(_XII_computer_science<=100);
         data[_roll_number].XII_marks.computer_science = _XII_computer_science;
    }
    
    function set_marks_XII_percentage(uint _roll_number, uint _XII_percentage) public onlyOwner{
         require(_XII_percentage<=100);
         data[_roll_number].XII_marks.percentage = _XII_percentage;
    }
    
    
    function get_marks_XII_english(uint _roll_number) public constant returns(uint){
        return data[_roll_number].XII_marks.english;
    }
    
    function get_marks_XII_maths(uint _roll_number) public constant returns(uint){
        return data[_roll_number].XII_marks.maths;
    }
    
    function get_marks_XII_physics(uint _roll_number) public constant returns(uint){
        return data[_roll_number].XII_marks.physics;
    }
    
    function get_marks_XII_chemistry(uint _roll_number) public constant returns(uint){
        return data[_roll_number].XII_marks.chemistry;
    }
    
    function get_marks_XII_computer_science(uint _roll_number) public constant returns(uint){
        return data[_roll_number].XII_marks.computer_science;
    }
    
    function get_marks_XII_percentage(uint _roll_number) public constant returns(uint){
        return data[_roll_number].XII_marks.percentage;
    }
    
    
    function set_marks_XII(uint _roll_number, uint _XII_english, uint _XII_maths, uint _XII_physics,
                                uint _XII_chemistry, uint _XII_computer_science, uint _XII_percentage) public onlyOwner {
        require((_XII_english<=100) && (_XII_maths<=100) && (_XII_physics<=100) && (_XII_chemistry<=100) && (_XII_computer_science<=100) && (_XII_percentage<=1000));  
        data[_roll_number].XII_marks.english = _XII_english;
        data[_roll_number].XII_marks.maths = _XII_maths;
        data[_roll_number].XII_marks.physics = _XII_physics;
        data[_roll_number].XII_marks.chemistry = _XII_chemistry;
        data[_roll_number].XII_marks.computer_science = _XII_computer_science;
        data[_roll_number].XII_marks.percentage = _XII_percentage;
    }
    
    function get_marks_XII(uint _roll_number) public constant returns(uint,uint,uint,uint,uint,uint){
        return (data[_roll_number].XII_marks.english, data[_roll_number].XII_marks.maths, data[_roll_number].XII_marks.physics,
                    data[_roll_number].XII_marks.chemistry, data[_roll_number].XII_marks.computer_science,
                    data[_roll_number].XII_marks.percentage);
    }
    
    function set_marks_BTech(uint _roll_number, uint _subject_code, uint _marks) public onlyOwner{
         require(_marks<=100);
         data[_roll_number].BTech_marks.marks[_subject_code] = _marks;
    }
   
    function get_marks_BTech(uint _roll_number, uint _subject_code) public constant returns(uint){
        return data[_roll_number].BTech_marks.marks[_subject_code];
    }
    
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    
}