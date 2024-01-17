let data = [{
    name: "Dog"
},{
    name: "Cat"
},{
    name: "Turtle"
},{
    name: "Hamster"
},{
    name: "Goldfish"
},{
    name: "Bunny"
}]
const [selected,setSelected] = useState([])
const [pets,setPets] = useState(data)
const updateSelected = (pet) => {
    if(!selected.some(selectedPet => selectedPet.name === pet.name)){
        let newSelected = [...selected, pet]
        setSelected(newSelected)
    } else {
        let newSelected = selected.filter(selectedPet => selectedPet.name !== pet.name)
        setSelected(newSelected)
    }
}
console.log(selected)

useEffect(() => {
    data = data.map(pet => {
        if(selected.some(selectedPet => selectedPet.name === pet.name)){
            return {...pet, selected: true}
        } else {
            return {...pet, selected: false}
        }
    })
    setPets(data)
},[selected])

let petButtons = pets.map(pet => <div 
    className={pet.selected ? "selected pet" : "pet"}
    onClick={() => updateSelected(pet)}
    >{pet.name}</div>)