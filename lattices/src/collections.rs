//! The `Collection` trait and simple singleton or array collection implementations.

use std::array::IntoIter;
use std::collections::{BTreeMap, BTreeSet, HashMap, HashSet};
use std::hash::Hash;

fn bool_to_option<'a>(value: bool) -> Option<&'a ()> {
    if value {
        Some(&())
    } else {
        None
    }
}
fn bool_to_option_mut<'a>(value: bool) -> Option<&'a mut ()> {
    if value {
        Some(Box::leak(Box::new(())))
    } else {
        None
    }
}

/// An abstract collection, analagous to `Map<K, V>` or `Set<K, ()>`.
pub trait Collection<K, V> {
    /// Get a reference to the value corresponding to the key.
    fn get(&self, key: &K) -> Option<&V>;
    /// Gets a mutable reference to the value corresponding to the key.
    fn get_mut(&mut self, key: &K) -> Option<&mut V>;
    /// Length of the collection.
    fn len(&self) -> usize;
    /// If the collection is empty.
    fn is_empty(&self) -> bool {
        0 == self.len()
    }

    /// Iterator type returned by [`Self::keys`].
    type Keys<'s>: Iterator<Item = &'s K>
    where
        K: 's,
        Self: 's;
    /// Returns an iterator over the keys in this collection.
    fn keys(&self) -> Self::Keys<'_>;

    /// Iterator type returned by [`Self::entries`].
    type Entries<'s>: Iterator<Item = (&'s K, &'s V)>
    where
        K: 's,
        V: 's,
        Self: 's;
    /// Returns an iterator over the key-value pairs in this collection.
    fn entries(&self) -> Self::Entries<'_>;

    /// Iterator type returned by [`Self::into_entries`].
    type IntoEntries: Iterator<Item = (K, V)>;
    /// Turns this collection into an iterator over its key-value pairs. Similar to
    /// [`std::iter::IntoIterator`] but also works with sets for `(K, ())` pairs.
    fn into_entries(self) -> Self::IntoEntries;
}

impl<K: 'static + Eq + Hash> Collection<K, ()> for HashSet<K> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(self.contains(key))
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(self.contains(key))
    }
    fn len(&self) -> usize {
        self.len()
    }

    type Keys<'s> = std::collections::hash_set::Iter<'s, K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.iter()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq + Ord> Collection<K, ()> for BTreeSet<K> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(self.contains(key))
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(self.contains(key))
    }
    fn len(&self) -> usize {
        self.len()
    }

    type Keys<'s> = std::collections::btree_set::Iter<'s, K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.iter()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq> Collection<K, ()> for Vec<K> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(self.contains(key))
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(self.contains(key))
    }
    fn len(&self) -> usize {
        self.len()
    }

    type Keys<'s> = std::slice::Iter<'s, K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.iter()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq> Collection<K, ()> for Option<K> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(Some(key) == self.as_ref())
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(Some(key) == self.as_ref())
    }
    fn len(&self) -> usize {
        self.is_some().into()
    }

    type Keys<'s> = std::option::Iter<'s, K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.iter()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq> Collection<K, ()> for Single<K> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(key == &self.0)
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(key == &self.0)
    }
    fn len(&self) -> usize {
        1
    }

    type Keys<'s> = std::iter::Once<&'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        std::iter::once(&self.0)
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq, const N: usize> Collection<K, ()> for Array<K, N> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(self.0.contains(key))
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(self.0.contains(key))
    }
    fn len(&self) -> usize {
        N
    }

    type Keys<'s> = std::slice::Iter<'s, K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.0.iter()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq, const N: usize> Collection<K, ()> for MaskedArray<K, N> {
    fn get(&self, key: &K) -> Option<&()> {
        bool_to_option(
            self.mask
                .iter()
                .zip(self.vals.iter())
                .any(|(mask, item)| *mask && item == key),
        )
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut ()> {
        bool_to_option_mut(
            self.mask
                .iter()
                .zip(self.vals.iter())
                .any(|(mask, item)| *mask && item == key),
        )
    }
    fn len(&self) -> usize {
        self.mask.iter().filter(|mask| **mask).count()
    }

    type Keys<'s> = impl Iterator<Item = &'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.mask
            .iter()
            .zip(self.vals.iter())
            .filter(|(mask, _)| **mask)
            .map(|(_, item)| item)
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s ())>;
    fn entries(&self) -> Self::Entries<'_> {
        self.keys().map(|k| (k, &()))
    }

    type IntoEntries = impl Iterator<Item = (K, ())>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter().map(|k| (k, ()))
    }
}

impl<K: 'static + Eq + Hash, V: 'static> Collection<K, V> for HashMap<K, V> {
    fn get(&self, key: &K) -> Option<&V> {
        self.get(key)
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut V> {
        self.get_mut(key)
    }
    fn len(&self) -> usize {
        self.len()
    }

    type Keys<'s> = impl Iterator<Item = &'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.keys()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s V)>;
    fn entries(&self) -> Self::Entries<'_> {
        self.iter()
    }

    type IntoEntries = std::collections::hash_map::IntoIter<K, V>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter()
    }
}

impl<K: 'static + Eq + Ord, V: 'static> Collection<K, V> for BTreeMap<K, V> {
    fn get(&self, key: &K) -> Option<&V> {
        self.get(key)
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut V> {
        self.get_mut(key)
    }
    fn len(&self) -> usize {
        self.len()
    }

    type Keys<'s> = impl Iterator<Item = &'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.keys()
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s V)>;
    fn entries(&self) -> Self::Entries<'_> {
        self.iter()
    }

    type IntoEntries = std::collections::btree_map::IntoIter<K, V>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter()
    }
}

impl<K: 'static + Eq, V: 'static> Collection<K, V> for Vec<(K, V)> {
    fn get(&self, key: &K) -> Option<&V> {
        self.iter().find(|(k, _)| k == key).map(|(_, val)| val)
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut V> {
        self.iter_mut().find(|(k, _)| k == key).map(|(_, val)| val)
    }
    fn len(&self) -> usize {
        self.len()
    }

    type Keys<'s> = impl Iterator<Item = &'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.iter().map(|(k, _)| k)
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s V)>;
    fn entries(&self) -> Self::Entries<'_> {
        self.iter().map(|(k, v)| (k, v))
    }

    type IntoEntries = std::vec::IntoIter<(K, V)>;
    fn into_entries(self) -> Self::IntoEntries {
        self.into_iter()
    }
}

impl<K: 'static + Eq, V: 'static, const N: usize> Collection<K, V> for Array<(K, V), N> {
    fn get(&self, key: &K) -> Option<&V> {
        self.0.iter().find(|(k, _)| k == key).map(|(_, val)| val)
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut V> {
        self.0
            .iter_mut()
            .find(|(k, _)| k == key)
            .map(|(_, val)| val)
    }
    fn len(&self) -> usize {
        N
    }

    type Keys<'s> = impl Iterator<Item = &'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.0.iter().map(|(k, _)| k)
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s V)>;
    fn entries(&self) -> Self::Entries<'_> {
        self.0.iter().map(|(k, v)| (k, v))
    }

    type IntoEntries = std::array::IntoIter<(K, V), N>;
    fn into_entries(self) -> Self::IntoEntries {
        self.0.into_iter()
    }
}

impl<K: 'static + Eq, V: 'static, const N: usize> Collection<K, V> for MaskedArray<(K, V), N> {
    fn get(&self, key: &K) -> Option<&V> {
        self.mask
            .iter()
            .zip(self.vals.iter())
            .find(|(mask, (k, _))| **mask && k == key)
            .map(|(_, (_, val))| val)
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut V> {
        self.mask
            .iter()
            .zip(self.vals.iter_mut())
            .find(|(mask, (k, _))| **mask && k == key)
            .map(|(_, (_, val))| val)
    }
    fn len(&self) -> usize {
        self.mask.iter().filter(|mask| **mask).count()
    }

    type Keys<'s> = impl Iterator<Item = &'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        self.mask
            .iter()
            .zip(self.vals.iter())
            .filter(|(mask, _)| **mask)
            .map(|(_, (k, _))| k)
    }

    type Entries<'s> = impl Iterator<Item = (&'s K, &'s V)>;
    fn entries(&self) -> Self::Entries<'_> {
        self.mask
            .iter()
            .zip(self.vals.iter())
            .filter(|(mask, _)| **mask)
            .map(|(_, (k, v))| (k, v))
    }

    type IntoEntries = impl Iterator<Item = (K, V)>;
    fn into_entries(self) -> Self::IntoEntries {
        self.mask
            .into_iter()
            .zip(self.vals.into_iter())
            .filter(|(mask, _)| *mask)
            .map(|(_, kv)| kv)
    }
}

impl<K: 'static + Eq, V: 'static> Collection<K, V> for Single<(K, V)> {
    fn get(&self, key: &K) -> Option<&V> {
        if key == &self.0 .0 {
            Some(&self.0 .1)
        } else {
            None
        }
    }
    fn get_mut(&mut self, key: &K) -> Option<&mut V> {
        if key == &self.0 .0 {
            Some(&mut self.0 .1)
        } else {
            None
        }
    }
    fn len(&self) -> usize {
        1
    }

    type Keys<'s> = std::iter::Once<&'s K>;
    fn keys(&self) -> Self::Keys<'_> {
        std::iter::once(&self.0 .0)
    }

    type Entries<'s> = std::iter::Once<(&'s K, &'s V)>;
    fn entries(&self) -> Self::Entries<'_> {
        std::iter::once((&self.0 .0, &self.0 .1))
    }

    type IntoEntries = std::iter::Once<(K, V)>;
    fn into_entries(self) -> Self::IntoEntries {
        std::iter::once((self.0 .0, self.0 .1))
    }
}

/// A singleton wrapper which implements `Collection`.
#[repr(transparent)]
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Single<T>(pub T);
impl<T> IntoIterator for Single<T> {
    type Item = T;
    type IntoIter = std::iter::Once<T>;

    fn into_iter(self) -> Self::IntoIter {
        std::iter::once(self.0)
    }
}
impl<T> From<T> for Single<T> {
    fn from(value: T) -> Self {
        Self(value)
    }
}

// impl<T: serde::Serialize> serde::Serialize for Single<T> {
//     fn serialize<S: serde::Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
//         self.0.serialize(serializer)
//     }
// }
// impl<'de, T: serde::Deserialize<'de>> serde::Deserialize<'de> for Single<T> {
//     fn deserialize<D: serde::Deserializer<'de>>(deserializer: D) -> Result<Self, D::Error> {
//         T::deserialize(deserializer).map(Single)
//     }
// }

/// A fixed-sized array wrapper which implements `Collection`.
#[repr(transparent)]
#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct Array<T, const N: usize>(pub [T; N]);
impl<T, const N: usize> IntoIterator for Array<T, N> {
    type Item = T;
    type IntoIter = IntoIter<T, N>;

    fn into_iter(self) -> Self::IntoIter {
        IntoIterator::into_iter(self.0)
    }
}
impl<T, const N: usize> From<[T; N]> for Array<T, N> {
    fn from(value: [T; N]) -> Self {
        Self(value)
    }
}

/// A boolean-masked fixed-size array wrapper which implements `Collection`.
#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct MaskedArray<T, const N: usize> {
    /// The boolean mask.
    pub mask: [bool; N],
    /// The collection items.
    pub vals: [T; N],
}
impl<T, const N: usize> IntoIterator for MaskedArray<T, N> {
    type Item = T;
    type IntoIter = impl Iterator<Item = Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        IntoIterator::into_iter(self.mask)
            .zip(IntoIterator::into_iter(self.vals))
            .filter(|(mask, _)| *mask)
            .map(|(_, val)| val)
    }
}