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

        {}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Unser 4-Stufiger Prozess
          </Heading>
          <VStack spacing={8}>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                1. Erstberatung
              </Heading>
              <Text fontSize="md">Wir besprechen deine Anforderungen und Ziele.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                2. Analyseplanung
              </Heading>
              <Text fontSize="md">Wir erstellen einen detaillierten Plan für deine statistische Analyse.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                3. Durchführung
              </Heading>
              <Text fontSize="md">Wir führen die geplanten Analysen durch und dokumentieren die Ergebnisse.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                4. Abschlussbesprechung
              </Heading>
              <Text fontSize="md">Wir besprechen die Ergebnisse und geben dir Empfehlungen für die nächsten Schritte.</Text>
            </Box>
          </VStack>
        </Box>

        {}
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
        <Text>&copy; 2024 Statistik Consulting. Alle Rechte vorbehalten.</Text>
      </Box>
    </Container>
  );
};

export default Index;
