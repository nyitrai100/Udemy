var housekeeper = {
	yearOfExperience: 12,
	name: "Jane",
	cleaningRebertoire: ["bathroom", "lobby", "bedroom"]
};

function HouseKeeper(yearOfExperience, name, cleaningRebertoire){
	this.yearOfExperience = yearOfExperience,
		this.name = name,
		this.cleaningRebertoire = cleaningRebertoire
} 

var houseKeeper1 = new HouseKeeper(10, "Alyssa", ["living room", "bedroom"])




function MaintenanceStaff(yearOfExperience, name, expertise){
	this.yearOfExperience = yearOfExperience,
		this.name= name,
		this.expertise = expertise
}

var maintenanceStaff1 = new MaintenanceStaff(25, "Bill", ["gardening", "electricity"])