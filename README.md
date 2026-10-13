# Import Data using Transform Maps (Spreadsheet)

## Description
This project demonstrates how to import spreadsheet data into ServiceNow using Import Sets and Transform Maps. It covers uploading a CSV file, loading records into an import set table, mapping source fields to target table fields, running the transform, and checking the imported records.

## Objective
- Import spreadsheet data into ServiceNow.
- Create and load an Import Set.
- Configure a Transform Map.
- Map source fields to target fields.
- Verify the transformed records.

## Requirements
- ServiceNow instance
- Spreadsheet saved as CSV
- Import Set table
- Target table and Transform Map

## Steps
1. Prepare the spreadsheet and save it as a CSV file.
2. In ServiceNow, open **System Import Sets**.
3. Upload the CSV file and load its data.
4. Create or select the Import Set table.
5. Create a Transform Map and choose the source and target tables.
6. Configure field maps between the source and target fields.
7. Run the transform.
8. Open the target table and verify the imported records.

## Sample Data
See `employees.csv`.

## Expected Result
The sample employee records are loaded into the ServiceNow target table through a Transform Map.

## Technologies
- ServiceNow
- Import Sets
- Transform Maps
- CSV / Spreadsheet

## Note
The CSV file is sample input data. The actual import and transformation are configured and run inside a ServiceNow instance; this repository does not perform the import by itself.
