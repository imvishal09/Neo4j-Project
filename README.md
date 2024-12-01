# Neo4j Network Analysis

This project showcases the use of Neo4j for graph-based analysis of an airport network. It involves designing a schema, importing data and executing workloads to extract meaningful insights.

## Tools and Techniques
- **Neo4j**: Graph database for storing and querying data.
- **Cypher Query Language**: For defining nodes, relationships, and extracting insights.
- **Graph Schema Design**: Organized schema with `Airport`, `Airline`, and `Plane` nodes and relationships such as `FLIES_TO` and `OPERATES`.
- **Spatial Functions**: Used for proximity-based analysis, such as finding the closest airport.
- **APOC Procedures**: Leveraged for schema management and advanced queries.
- **Interactive Browser Guide**: A `.neo4j-browser-guide` file for guided exploration of the dataset.

## Schema Visualization
Below is a visualization of the graph database schema. It highlights the `Airport`, `Airline`, and `Plane` nodes and their relationships.

![Database Visualization](https://github.com/imvishal09/Neo4j-Project/blob/main/db%20visualisation.jpg)

## Workflow
1. **Schema Design**: Defined nodes and relationships to structure the data logically.
2. **Data Import**: Loaded data from `.dat` files into the Neo4j graph database.
3. **Query Development**: Designed workloads to analyze international vs. domestic flights, airline operations and route connections.
4. **Performance Optimization**: Created indexes for faster query execution.

## Example 1 of the project:
This Cypher query retrieves three international flight connections from the Neo4j database, linking departure and arrival airports in different countries with their corresponding airplanes based on IATA equipment codes.

![Example 1:](https://github.com/imvishal09/Neo4j-Project/blob/main/Example%201.jpg)

## Disclaimer
This project is for academic purposes and demonstrates tools and techniques for graph-based data analysis. Data used in this project is a simplified representation and not intended for real-world use.
