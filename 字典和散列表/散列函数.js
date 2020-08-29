// 最受社区推崇
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

function hashCode(key) {
  const tableKey = defaultToString(key);
  let hash = 5381;
  for (let i = 0; i < table.length; i++) {
    hash = hash * 33 + tableKey.charCodeAt(i);
  }
  return hash % 1013;
}
