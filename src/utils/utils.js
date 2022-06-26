import { useEffect } from "react";

/**
 * @description
 * @param {Function} effect
 * @param {Array} deps
 * @param {Number} delay
 * @returns Void
 */
export const useDebouncedEffect = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};

/**
 * @description
 * @param {Array} creators
 * @returns {Array}
 */
export const renderCreators = (creators) => {
  return (
    <div className="text-sm w-full text-left overflow-hidden whitespace-nowrap overflow-ellipsis">
      {creators.map((creator, i, arr) => {
        let ret = creator?.name;
        let ending = i !== arr.length - 1 ? ", " : "";
        return ret + ending;
      })}
    </div>
  );
};

/**
 * @description
 * @param {Array} covers
 * @returns {Object}
 */
export const getSmallestImage = (covers) =>
  covers?.reduce((smallest, image) => {
    if (image.height < smallest.height) return image;
    return smallest;
  }, covers[0]);

/**
 * @description
 * @param {Array} covers
 * @returns {Object}
 */
export const getBiggestImage = (covers) =>
  covers?.reduce((biggest, image) => {
    if (image.height > biggest.height) return image;
    return biggest;
  }, covers[0]);

/**
 * @description
 * @param {Object} comic or Character info
 * @returns {String}
 */
export const getThumbnail = (comicData) => {
  let imageLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
  if (comicData?.thumbnail.length !== 0) {
    imageLink =
      comicData?.thumbnail.path + "." + comicData?.thumbnail.extension;
  }
  return imageLink;
};
