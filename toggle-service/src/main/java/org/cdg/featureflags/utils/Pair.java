package org.cdg.featureflags.utils;

/**
 * @param left Return an immutable singleton map containing only the specified key-value pair mapping
 */
public record Pair<T, U>(T left, U right) {

    //    public static <T, U> Map<T, U> of(T first, U second) {
//
//        return Collections.singletonMap(first, second);
//
//    }


}