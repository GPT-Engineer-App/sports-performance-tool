import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Select, Table, Thead, Tbody, Tr, Th, Td, Progress, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaSearch, FaDumbbell, FaChartLine, FaUser, FaLock } from "react-icons/fa";

const exercises = [
  {
    name: "Bench Press",
    type: "Compound",
    muscleGroups: ["Chest", "Triceps", "Shoulders"],
    description: "A compound exercise that primarily targets the chest muscles.",
    agtStandards: { beginner: 10, intermediate: 15, advanced: 20 },
    safetyTips: "Keep your back flat on the bench and your feet on the floor.",
  },
  // Add more exercises here
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("");
  const [athleteData, setAthleteData] = useState({});

  const handleSearch = () => {
    // Implement search functionality
  };

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroup(event.target.value);
  };

  const handleAthleteDataChange = (event) => {
    const { name, value } = event.target;
    setAthleteData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateTrainingProgram = () => {
    // Implement training program generation based on athlete data and AGT standards
  };

  const filteredExercises = exercises.filter((exercise) => exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedMuscleGroup === "" || exercise.muscleGroups.includes(selectedMuscleGroup)));

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Sports Performance Database and Assessment Tool
      </Heading>

      {/* Search and Filter */}
      <Box mb={8}>
        <Input placeholder="Search exercises..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={4} />
        <Select value={selectedMuscleGroup} onChange={handleMuscleGroupChange}>
          <option value="">All Muscle Groups</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          {/* Add more muscle groups */}
        </Select>
        <Button leftIcon={<FaSearch />} onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {/* Exercise Table */}
      <Table variant="simple" mb={8}>
        <Thead>
          <Tr>
            <Th>Exercise</Th>
            <Th>Type</Th>
            <Th>Muscle Groups</Th>
            <Th>AGT Standards</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredExercises.map((exercise) => (
            <Tr key={exercise.name}>
              <Td>{exercise.name}</Td>
              <Td>{exercise.type}</Td>
              <Td>{exercise.muscleGroups.join(", ")}</Td>
              <Td>
                Beginner: {exercise.agtStandards.beginner}
                <br />
                Intermediate: {exercise.agtStandards.intermediate}
                <br />
                Advanced: {exercise.agtStandards.advanced}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Athlete Assessment */}
      <Heading as="h2" size="lg" mb={4}>
        Athlete Assessment
      </Heading>
      <Box mb={8}>
        <Input placeholder="Athlete Name" name="name" value={athleteData.name || ""} onChange={handleAthleteDataChange} mb={4} />
        {/* Add more input fields for athlete data */}
        <Button leftIcon={<FaChartLine />} onClick={generateTrainingProgram}>
          Generate Training Program
        </Button>
      </Box>

      {/* Training Program */}
      <Heading as="h2" size="lg" mb={4}>
        Training Program
      </Heading>
      {/* Display generated training program */}

      {/* Safety Guidelines */}
      <Heading as="h2" size="lg" mb={4}>
        Safety Guidelines
      </Heading>
      <Accordion allowMultiple>
        {exercises.map((exercise) => (
          <AccordionItem key={exercise.name}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {exercise.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{exercise.safetyTips}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Resources */}
      <Heading as="h2" size="lg" mb={4}>
        Resources
      </Heading>
      <Text>
        Learn more about AGT and exercise science:
        {/* Add links to resources */}
      </Text>

      {/* Footer */}
      <Box as="footer" mt={8} textAlign="center">
        <Text>
          <FaUser /> User Management | <FaLock /> Privacy and Security
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
