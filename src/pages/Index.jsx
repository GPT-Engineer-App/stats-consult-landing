import { Container, Text, VStack, Box, Heading, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaChartLine, FaGraduationCap, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header Section */}
      <Box as="header" bg="teal.500" color="white" py={4} textAlign="center">
        <Heading as="h1" size="xl">
          Statistik Consulting für Studenten
        </Heading>
        <Text fontSize="lg">Wir helfen dir, deine Abschlussarbeit erfolgreich zu meistern!</Text>
      </Box>

      {/* Main Content */}
      <VStack spacing={8} mt={8}>
        {/* About Section */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Über uns
          </Heading>
          <Text fontSize="md">Wir sind ein Team von Statistik-Experten, die sich darauf spezialisiert haben, Studenten bei ihren Abschlussarbeiten zu unterstützen. Unser Ziel ist es, dir zu helfen, deine statistischen Analysen korrekt und effizient durchzuführen.</Text>
        </Box>

        {/* Services Section */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Unsere Dienstleistungen
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack>
              <IconButton aria-label="Statistical Analysis" icon={<FaChartLine />} size="lg" isRound />
              <Text>Statistische Analyse</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Thesis Support" icon={<FaGraduationCap />} size="lg" isRound />
              <Text>Unterstützung bei Abschlussarbeiten</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Kontaktiere uns
          </Heading>
          <Text fontSize="md" mb={4}>
            Bereit, deine statistischen Herausforderungen zu meistern? Kontaktiere uns noch heute!
          </Text>
          <Button colorScheme="teal" size="lg">
            Jetzt Kontakt aufnehmen
          </Button>
        </Box>

        {/* Contact Information */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Kontaktinformationen
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack>
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" isRound />
              <Text>info@statistik-consulting.de</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" isRound />
              <Text>+49 123 456 789</Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>

      {/* Footer Section */}
      <Box as="footer" bg="teal.500" color="white" py={4} mt={8} textAlign="center">
        <Text>&copy; 2023 Statistik Consulting. Alle Rechte vorbehalten.</Text>
      </Box>
    </Container>
  );
};

export default Index;
