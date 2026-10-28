import { CATALOG } from "../data/catalog.ts";
import { PART_STARTS } from "../data/parts.ts";
import { Library } from "../domain/Library.ts";

export const library = new Library(CATALOG, PART_STARTS);
