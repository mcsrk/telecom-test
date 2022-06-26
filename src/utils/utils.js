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
 * @param {Array} artists
 * @returns {Array}
 */
export const renderArtists = (artists) =>
  artists?.map((creator, i, arr) => {
    const uri = creator?.uri;
    const name = creator?.profile?.name;
    return (
      <div
        key={"creator-last" + uri}
        className="cursor-pointer hover:underline"
        onClick={() => window.location.replace(uri)}
      >
        {name}
        {i !== arr.length - 1 ? "," : ""}
      </div>
    );
  });

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
