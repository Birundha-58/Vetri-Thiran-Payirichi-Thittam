// 1. Trigger Data Source File Fetch
var dataSourceGr = new GlideRecord('sys_data_source');
if (dataSourceGr.get('YOUR_DATA_SOURCE_SYS_ID')) {
    var loader = new GlideImportSetLoader();
    var importSetGr = loader.getImportSetGr(dataSourceGr);
    var success = loader.loadImportSetTable(importSetGr, dataSourceGr);

    if (success) {
        // 2. Execute Transform Map
        var transformMapGr = new GlideRecord('sys_transform_map');
        transformMapGr.addQuery('data_source', dataSourceGr.getUniqueValue());
        transformMapGr.query();

        while (transformMapGr.next()) {
            var transformer = new GlideImportSetTransformer();
            transformer.transformAllMaps(importSetGr);
        }
    }
}