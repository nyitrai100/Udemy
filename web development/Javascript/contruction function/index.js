var housekeeper = {
	yearOfExperience: 12,
	name: "Jane",
	cleaningRebertoire: ["bathroom", "lobby", "bedroom"]
};

function HouseKeeper(yearOfExperience, name, cleaningRebertoire, clean,){
	this.yearOfExperience = yearOfExperience,
		this.name = name,
		this.cleaningRebertoire = cleaningRebertoire,
		this.clean = function(){
			alert("housekeeper is cleaning")
			clean();
		}
} 

var houseKeeper1 = new HouseKeeper(10, "Alyssa", ["living room", "bedroom"], clean(),)




function MaintenanceStaff(yearOfExperience, name, expertise){
	this.yearOfExperience = yearOfExperience,
		this.name= name,
		this.expertise = expertise
}

var maintenanceStaff1 = new MaintenanceStaff(25, "Bill", ["gardening", "electricity"])