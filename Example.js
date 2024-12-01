MATCH (start:Airport)-[f:FLIES_TO]->(end:Airport)
WHERE start.country <> end.country AND f.equipment IS NOT NULL
UNWIND split(f.equipment, ' ') AS equipmentCode
MATCH (plane:Plane {IATA: equipmentCode})
RETURN plane, f, start, end
LIMIT 3;
